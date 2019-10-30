import {FormGroup} from '@angular/forms';

export function confirmPassword(group: FormGroup) {
  const pass = group.controls.password.value;
  const confirm = group.controls.confirm.value;

  return pass === confirm ? null : {notSame: true};
}
