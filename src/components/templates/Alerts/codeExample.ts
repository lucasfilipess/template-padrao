export const codeExample = `
  import { useToast } from 'hooks'


  const { createToast } = useToast()
  const message = 'Olá! Aqui você informa sua mensagem de informação ao usuário.'

  <Button
      onClick={() => createToast({ type: 'info', message })}
      variant="info"
  >
       Mensagem Informativa
  </Button>

`
