import ConsultationAttributes from './Interface/consultationAtrributes'
class Consultation implements ConsultationAttributes {
  public id_consultation!: number
  public id_user!: number
  public id_product!: number
  public message!: string
  public readonly date_consultation!: string
  constructor(consultationData: Consultation) {
    this.id_consultation = consultationData.id_consultation
    this.id_user = consultationData.id_user
    this.id_product = consultationData.id_product
    this.message = consultationData.message
    this.date_consultation = consultationData.date_consultation
  }
}

export default Consultation
