export const codeExample = `
  import { Api, ResponseProps } from 'services'
  import { useToast } from 'hooks'


  const { createToast } = useToast()

  const handleRequest = async () => {
      const { data }: ResponseProps = await Api.get('/rota-api')
      createToast({ type: 'success', message: data })
  }

  <Button onClick={handleRequest} variant="danger">
     Click error
  </Button>

`
