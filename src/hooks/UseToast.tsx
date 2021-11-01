import { toast } from 'react-toastify'
import { Toast, ToastProps } from 'components/atoms'

const useToast = () => {
  const createToast = ({ type, message }: ToastProps) =>
    toast(<Toast type={type} message={message} />, {
      type: type
    })
  return { createToast }
}

export default useToast
