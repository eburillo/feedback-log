import { v4 as uuidv4 } from 'uuid'

export const customers = [
  {
    id: uuidv4(),
    name: 'Enrique Burillo',
    feedback: [
      {
        id: uuidv4(),
        text: 'The layout breaks on certain tablets',
      },
      {
        id: uuidv4(),
        text: 'We need to be able to invite people to the platform',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Michael Bloom',
    feedback: [
      {
        id: uuidv4(),
        text: 'The color schema needs to be adapted.',
      },
    ],
  },
]
