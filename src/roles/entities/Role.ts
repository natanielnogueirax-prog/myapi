import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

//@ são decorators no typeorm, ver na documentação do typeorm entities special columns
// tem que habilitar decorators no ts config json
@Entity('roles')
export class Role {
  @PrimaryColumn('uuid')
  id?: string;

  @Column('varchar', { length: 255 })
  name: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
