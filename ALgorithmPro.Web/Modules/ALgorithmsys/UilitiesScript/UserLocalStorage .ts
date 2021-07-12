namespace ALgorithmPro {

    export class UserLocalStorage implements Serenity.SettingStorage {
        getItem(key: string): string {
            return window.localStorage.getItem(
                Authorization.userDefinition.Username + ":" + key);
        }

        setItem(key: string, value: string): void {
            window.localStorage.setItem(
                Authorization.userDefinition.Username + ":" + key, value);
        }
    }

}