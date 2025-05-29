export interface Template {
  id: number
  name: string
  language: string
  category: string
  status: string
  components: TemplateComponents
  createdAt: string
}

export interface TemplateComponents {
  header: TemplateHeader
  body: TemplateBody
  footer: string
  buttons: TemplateButton[]
}

export interface TemplateHeader {
  type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'DOCUMENT'
  content: string
}

export interface TemplateBody {
  content: string
}

export interface TemplateButton {
  id: number
  index: number
  type: 'QUICK_REPLY' | 'PHONE_NUMBER' | 'STATIC_URL'
  text: string
  url: string
  phone_number?: string
}