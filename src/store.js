import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
  decals: ['1', '2', '3'],
  color: '#EFBD4E',
  decal: 'three2'
})

export { state }
