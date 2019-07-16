import { WebPlugin } from '@capacitor/core';
import { OpenIdentityPlugin } from './definitions';

export class OpenIdentityWeb extends WebPlugin implements OpenIdentityPlugin {
  constructor() {
    super({
      name: 'OpenIdentity',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const OpenIdentity = new OpenIdentityWeb();

export { OpenIdentity };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(OpenIdentity);
