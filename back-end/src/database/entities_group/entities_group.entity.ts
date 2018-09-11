import {Entity, ManyToMany, JoinTable, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Entities } from '../entities/entities.entity'
import { ArticleGroupEntities } from '../article_group_entities/article_group_entities.entity'

@Entity()
export class EntitiesGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToMany(type => Entities, entities => entities.entities_groups)
    @JoinTable()
    entities: Entities[];

    @OneToOne(type => ArticleGroupEntities, article_group_entities => article_group_entities.entities_group)
    @JoinColumn()
    article_group_entities: ArticleGroupEntities; 
}