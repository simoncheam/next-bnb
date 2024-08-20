import { Input } from '../ui/input';
import { Label } from '../ui/label';

const ImageInput = () => {
  const name = 'image';
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Image
      </Label>
      <Input type='file' id={name} name={name} required accept='image/*' className='max-w-xs' />
      ImageInput
    </div>
  );
};
export default ImageInput;