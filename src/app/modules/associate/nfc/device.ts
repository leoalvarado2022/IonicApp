export class Device {
  id: number;
  id_device: string;
  link: string;
  // type_link: string;
  type: string;
  id_link: number;
  status: number;

  constructor(info?: any) {
    if (info) {
      this.id = +info.id;
      this.id_device = info.id_device; //id_dispositivo
      this.link = info.link; // n_enlace
      // this.type_link = data.type_link;
      this.type = info.type;
      this.id_link = +info.id_link; //id_enlace
    }
  }
}
