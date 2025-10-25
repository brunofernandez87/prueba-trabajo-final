import {Consulta} from '../models'
import data from '../mock/consultaMock.json'
export const crearConsulta = async (consultaData: Consulta) => {
  const consulta = await new Consulta(consultaData)
  data.push(consulta)
  return consulta
}
// no veo necesario consultar consultas ni eliminarlas ya que del resto se encarga whatsapp
