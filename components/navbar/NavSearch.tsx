'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input';

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
    // check if anything is url param changed
  }, [searchParams.get('search')]);

  return (
    <Input
      type='text'
      placeholder='Find a place to stay...'
      className='max-w-xs dark:bg-muted'
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
};
export default NavSearch;
