import createNumberMask from 'text-mask-addons/dist/createNumberMask'

export const cpf = [
  /[0-9]/,
  /\d/,
  /\d/,
  '.',
  /[0-9]/,
  /\d/,
  /\d/,
  '.',
  /[0-9]/,
  /\d/,
  /\d/,
  '-',
  /[0-9]/,
  /\d/
]

export const cnpj = [
  /[0-9]/,
  /\d/,
  '.',
  /[0-9]/,
  /\d/,
  /\d/,
  '.',
  /[0-9]/,
  /\d/,
  /\d/,
  '/',
  /[0-9]/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /[0-9]/,
  /\d/
]

export const cep = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/]

export const money = createNumberMask({
  allowDecimal: true,
  decimalSymbol: ',',
  includeThousandsSeparator: true,
  prefix: '',
  thousandsSeparatorSymbol: '.'
})

export const phone = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
]
