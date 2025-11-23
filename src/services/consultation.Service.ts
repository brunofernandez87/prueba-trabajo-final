import Consultation from '../models/consultation'
import data from '../mock/consultationMock.json'
export const createConsultation = async (consultationData: Consultation) => {
  const consultation = await new Consultation(consultationData)
  data.push(consultation)
  return consultation
}
// no veo necesario consultar consultas ni eliminarlas ya que del resto se encarga whatsapp
