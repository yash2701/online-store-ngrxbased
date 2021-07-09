export class Cart {
    selectedFeature?: string = '';
    selectedNode?: string = '';
    deviceType?: string = '';
    browser?: string = '';
    browserVersion?: string = '';
    device?: string = '';
    os?: string = '';
    emailAddress?: string = '';
    constructor(data: any) {
      Object.assign(this, data);
      Object.create(this);
    }
  }

  export class UserData {
    token?: string;
    userUuid?: string;
    selectedNode?: string;
  }

