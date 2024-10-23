import { Label } from '@/components/ui/label';
import { Input } from '../ui/input';
import { Prisma } from '@prisma/client';

type PriceInputProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: PriceInputProps) => {
  // const name = 'price';
  const name = Prisma.PropertyScalarFieldEnum.price;
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Price ($)
      </Label>

      <Input type='number' id={name} name={name} required min='0' defaultValue={defaultValue || 100} />
    </div>
  );
};
export default PriceInput;
