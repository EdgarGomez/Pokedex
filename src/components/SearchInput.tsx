import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
  onDebounce: (value:string) => void;
}


export const SearchInput = ({onDebounce}: Props) => {

  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebouncedValue(textValue);
  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue])

  return (
    <div style={{
      position: 'absolute',
      zIndex: 999,
    }}>
      <div>
        <input
          placeholder="Search Pokemon"
          autoCapitalize="none"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          style={{borderRadius: 10, height: 40, paddingLeft: 10}}
        />
      </div>
    </div>
  )
}