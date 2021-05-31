import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {PosService} from '../services/pos.service';
import {switchMap} from 'rxjs/operators';
import {DeviceService} from '../../../services/device/device.service';
import {MasterService} from '../services/master.service';
import {Platform} from '@ionic/angular';
import {StoreService} from '../../../shared/services/store/store.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {StepperService} from '../../../services/storage/stepper/stepper.service';
import {BluetoothService} from '../../../services/bluetooth/bluetooth.service'; // ocultar para ios
import {Prints} from '../../../helpers/prints';

@Component({
  selector: 'app-order-config',
  templateUrl: './orders-config.page.html',
  styleUrls: ['./orders-config.page.scss'],
  // ocultar para ios
  providers: [
    BluetoothService
  ],
})
export class OrdersConfigPage implements OnInit {

  public configForm: FormGroup;
  public configDelivery: any;
  public configActiveDelivery: any;
  public printConfig: any;
  public configUrl: any;

  public configFormComanda: FormGroup;
  public configFormDocuments: FormGroup;
  public android = false;
  public loadingCommand = false;
  public loadingDocument = false;
  public printCommad;
  public printDocument;
  public nc: any;
  // activar para ios
  // bluetoothService: any; // ocultar para android

  constructor(
    private formBuilder: FormBuilder,
    private storageSyncService: StorageSyncService,
    private detectChangeRef: ChangeDetectorRef,
    public _posService: PosService,
    private masterService: MasterService,
    private platform: Platform,
    private storeService: StoreService,
    private toastService: ToastService,
    private httpService: HttpService,
    private stepperService: StepperService,
    private bluetoothService: BluetoothService, // ocultar para ios
    private deviceService: DeviceService,
    public prints: Prints,
  ) {
    this.platform.ready().then((data) => {
      if (this.platform.is('android') || this.platform.is('electron') || this.platform.is('desktop')) {
        this.android = true;
      }
    });
  }

  ngOnInit() {
    this.nc = this.deviceService.getUUIDAndroid();

    // console.log(this.nc);

    this.configForm = this.formBuilder.group({
      configId: ['', Validators.required],
    });
    const company = this.storeService.getActiveCompany();
    // formulario para actualizar comandas
    this.configFormComanda = this.formBuilder.group({
      appPrint: ['', Validators.required],
      id: new FormArray([]),
      params: new FormArray([]),
      value: new FormArray([]),
      entity: [company.id, Validators.required]
    });

    // documentos para actualizar documentos
    this.configFormDocuments = this.formBuilder.group({
      appPrint: ['', Validators.required],
      id: new FormArray([]),
      params: new FormArray([]),
      value: new FormArray([]),
      entity: [company.id, Validators.required]
    });

    this.loadData();
  }

  /**
   * @description load data
   */
  loadData() {
    this.storageSyncService.getConfigDelivery().then(data => {
      this.configDelivery = data;
      this.configActiveDelivery = this.storageSyncService.getActiveConfigDelivery();
      if (this.configActiveDelivery) {
        this.configForm.patchValue({
          configId: this.configActiveDelivery.id
        });
        this.configUrl = this.configActiveDelivery.url;
      } else {
        this._posService.connection = false;
      }
    });

    // obtener los datos de la configuracion
    this.storageSyncService.getPrintConfig().then((data: any) => {
      this.printConfig = data;

      this.printCommad = this.printConfig.filter(value => value.app === 'impresion_comandas' && value.nc === this.nc);
      this.printDocument = this.printConfig.filter(value => value.app === 'impresion_documentos' && value.nc === this.nc);

      if (this.printCommad && this.printCommad.length) {
        this.setDataCommand(this.printCommad);
      } else {
        this.printCommad = this.dataCommandDefault();
        this.setDataCommand(this.dataCommandDefault());
      }


      if (this.printDocument && this.printDocument.length) {
        this.setDataDocument(this.printDocument);
      } else {
        this.printDocument = this.dataDocumentDefault();
        this.setDataDocument(this.dataDocumentDefault());
      }

    });
  }

  /**
   * @description cambio de select
   * @param event
   */
  changeLocal(event: any) {
    this.configForm.patchValue({
      configId: event.detail.value
    });
  }

  /**
   * getPairedDevices
   */
  public getPairedDevices = () => {
    return this.bluetoothService.getPairedDevices();
  };

  /**
   * @description actualizar datos
   */
  submitForm() {
    const data = Object.assign({}, this.configForm.value);
    const config = this.configDelivery.find(value => value.id === data.configId);
    console.log(config);
    this.configUrl = config.url;
    this.storageSyncService.setActiveConfigDelivery(config);
    localStorage.setItem('modoPOS', '1');
    this.configActiveDelivery = config;
  }

  /**
   * @description obtener los datos de la comanda y documentos se envian los dos siempre
   */
  submitFormPrint() {
    const user = this.storeService.getActiveCompany();
    this.loadingCommand = true;
    const dataCommand = Object.assign({}, this.configFormComanda.value);
    dataCommand.user = user.user;
    this.loadingDocument = true;
    const dataDocument = Object.assign({}, this.configFormDocuments.value);
    dataDocument.user = user.user;

    const rows = [];

    rows.push(dataCommand);
    rows.push(dataDocument);

    this.submitFormUpdateConfig(rows);
  }

  /**
   * @description actualizar los datos de la configuracion
   * @param data
   */
  submitFormUpdateConfig(data) {
    this.masterService.setHttpUpdateConfig({documents: data}).subscribe((data: any) => {
      if (!data.response.respuesta || data.response.respuesta !== 'ok') {
        this.toastService.errorToast(data.response.respuesta);
      } else {
        this.stepperService.syncAll().then(() => {
          this.loadingCommand = false;
          this.loadingDocument = false;
          this.clearForm();
          this.loadData();
        }).catch(error => {
          this.loadingCommand = false;
          this.loadingDocument = false;
        });
      }
    }, error => {
      this.httpService.errorHandler(error);
      this.loadingCommand = false;
      this.loadingDocument = false;
    });
  }

  /**
   * @description actualizar formulario de config comandas
   * @param printCommad
   */
  setDataCommand(printCommad) {
    this.configFormComanda.patchValue({
      appPrint: printCommad[0].app
    });

    // imprimir comandas
    for (let prin of printCommad) {
      if (!prin.nc) {
        this.idCommand.push(this.formBuilder.control(0, Validators.required));
      } else {
        this.idCommand.push(this.formBuilder.control(prin.id, Validators.required));
      }
      if (prin.param) {
        this.paramsCommand.push(this.formBuilder.control(prin.param, Validators.required));
      }
      if (prin.value) {
        this.valueCommand.push(this.formBuilder.control(prin.value, Validators.required));
      }
    }
  }

  /**
   * @description actualizar formulario de config documentos
   * @param printDocument
   */
  setDataDocument(printDocument) {
    this.configFormDocuments.patchValue({
      appPrint: printDocument[0].app
    });

    // imprimir documentos
    for (let prin of printDocument) {
      if (prin.id) {
        if (!prin.nc) {
          this.idDocument.push(this.formBuilder.control(0, Validators.required));
        } else {
          this.idDocument.push(this.formBuilder.control(prin.id, Validators.required));
        }
      }
      if (prin.param) {
        this.paramsDocument.push(this.formBuilder.control(prin.param, Validators.required));
      }
      if (prin.value) {
        this.valueDocument.push(this.formBuilder.control(prin.value, Validators.required));
      }
    }
  }

  /**
   * @description sync datos del pos
   */
  connectionSync() {
    this._posService.loginToSync();
  }

  /**
   * @description borrar cualquier dato del pos
   */
  deleteConnection() {
    this.storageSyncService.removeActiveConfigDelivery();
    this.configForm.patchValue({
      configId: ''
    });
    localStorage.removeItem('modoPOS');
    this.configUrl = undefined;
    this.configActiveDelivery = undefined;
  }

  clearForm() {
    this.idDocument.clear();
    this.paramsDocument.clear();
    this.valueDocument.clear();
    this.idCommand.clear();
    this.paramsCommand.clear();
    this.valueCommand.clear();
  }

  /**
   * @description test de impresion comanda
   */
  testPrint(test: string = 'comanda') {
    this.prints.printConfigActive(this.printConfig, test);
    if (this.prints.getPrintIP()) {
      this.prints.printTestIP();
    } else {
      this.prints.printTestBT();
    }
  }

  /**
   * ///////////////// DOCUMENTOS
   */
  get idDocument() {
    return this.configFormDocuments.get('id') as FormArray;
  }

  get paramsDocument() {
    return this.configFormDocuments.get('params') as FormArray;
  }

  get valueDocument() {
    return this.configFormDocuments.get('value') as FormArray;
  }

  /**
   * ///////////////// COMANDAS
   */
  get idCommand() {
    return this.configFormComanda.get('id') as FormArray;
  }

  get paramsCommand() {
    return this.configFormComanda.get('params') as FormArray;
  }

  get valueCommand() {
    return this.configFormComanda.get('value') as FormArray;
  }

  /**
   * @description obtner el valor del label del formulario
   * @param i
   */
  labelCommand(i) {
    if (this.paramsCommand.controls[i] && this.paramsCommand.controls[i].value) {
      return this.paramsCommand.controls[i].value;
    }

    return '';
  }

  /**
   * @description obtner el valor del label del formulario
   * @param i
   */
  labelDocument(i) {
    if (this.paramsDocument.controls[i] && this.paramsDocument.controls[i].value) {
      return this.paramsDocument.controls[i].value;
    }

    return '';
  }

  /**
   * @description buscar metodo de busqueda
   */
  valueCommandMethod() {
    const valueCommand = this.valueCommand.controls.find(data => data.value === 'ip');

    if (valueCommand) {
      return true;
    }

    return false;
  }

  /**
   * @buscarmetodo de busqueda
   */
  valueDocumentMethod() {
    const valueDocument = this.valueDocument.controls.find(data => data.value === 'ip');

    if (valueDocument) {
      return true;
    }

    return false;
  }

  /**
   * @description cambiar el nombre de los input para imprimir documentos
   * @param label
   */
  traduction(label: string) {
    switch (label) {
      case 'general': {
        return 'Imprimir';
        break;
      }
      case 'metodo': {
        return 'Metodo';
        break;
      }
      case 'direccion': {
        return 'Dirección IP';
        break;
      }
      case 'copias': {
        return 'Copias';
        break;
      }
      case 'codigo_barra': {
        return 'Codigo de Barra';
        break;
      }
      default: {
        return label;
        break;
      }
    }

    return label;
  }

  /**
   * @description si no viene de la base de datos estos datos default
   */
  public dataDocumentDefault() {
    return [
      {
        'id': 1,
        'nc': null,
        'app': 'impresion_documentos',
        'param': 'general',
        'value': 'si',
        'entity_id': null
      },
      {
        'id': 2,
        'nc': null,
        'app': 'impresion_documentos',
        'param': 'metodo',
        'value': 'ip',
        'entity_id': null
      },
      {
        'id': 3,
        'nc': null,
        'app': 'impresion_documentos',
        'param': 'direccion',
        'value': '192.168.0.100',
        'entity_id': null
      },
      {
        'id': 4,
        'nc': null,
        'app': 'impresion_documentos',
        'param': 'copias',
        'value': '1',
        'entity_id': null
      }
    ];
  }

  /**
   * @description si no viene de la base de datos estos datos default
   */
  public dataCommandDefault() {
    return [
      {
        'id': 5,
        'nc': null,
        'app': 'impresion_comandas',
        'param': 'general',
        'value': 'si',
        'entity_id': null
      },
      {
        'id': 6,
        'nc': null,
        'app': 'impresion_comandas',
        'param': 'metodo',
        'value': 'ip',
        'entity_id': null
      },
      {
        'id': 7,
        'nc': null,
        'app': 'impresion_comandas',
        'param': 'direccion',
        'value': '192.168.0.100',
        'entity_id': null
      },
      {
        'id': 8,
        'nc': null,
        'app': 'impresion_comandas',
        'param': 'copias',
        'value': '1',
        'entity_id': null
      },
      {
        'id': 9,
        'nc': null,
        'app': 'impresion_comandas',
        'param': 'codigo_barra',
        'value': 'si',
        'entity_id': null
      }
    ];
  }
}
