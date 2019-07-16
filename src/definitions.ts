declare module "@capacitor/core" {
  interface PluginRegistry {
    OpenIdentity: OpenIdentityPlugin;
  }
}

export interface OpenIdentityPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
