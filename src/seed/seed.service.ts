import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/pokemon-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { CreatePokemonDto } from '../pokemon/dto/create-pokemon.dto';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel = Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async execute() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    const pokemonsToInsert: CreatePokemonDto[] = [];
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      pokemonsToInsert.push({
        name: name,
        no,
      });
    });
    await this.pokemonModel.insertMany(pokemonsToInsert);
    return 'Seed executed';
  }
}
