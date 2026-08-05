import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

//@ são decorators no typeorm, ver na documentação do typeorm entities special columns
// tem que habilitar decorators no ts config json
@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  passwor: string;

  @Column()
  isAdmin: boolean;

  @Column()
  avatar?: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
