export class AppServer {
  private app: string;

  constructor(info: string) {
    this.app = info ?? 'Olá Dev!';
  }
}

console.log(new AppServer('Bem-vindo ao servidor HTTP!'));
