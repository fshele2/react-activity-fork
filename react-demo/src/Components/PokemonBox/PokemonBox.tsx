import React from 'react'
import { Pokemon } from '../../models/Pokemon'

type PokemonProps = Pokemon & {
  onDelete: () => void;
}

export default function PokemonBox(props: PokemonProps) {
  return (
    <div>
      <img src={props.img} />
      <h4>{props.name}</h4>
      <p>Level: {props.level}</p>
      <p>Health: {props.health}</p>
      <p>Damage: {props.damage}</p>
      {props.onDelete && <button onClick={props.onDelete}>Delete</button>}
    </div>
  )
}