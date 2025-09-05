import { Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import * as React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function FormTextArea({ control, name, label, placeholder, rules }: any) {
    return (
        <View className="">
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }: any) => (
                    <>
                        <Label className='text-md' nativeID='name'>{label}</Label>
                        <Textarea
                            placeholder={placeholder}
                            className='bg-white'
                            onChangeText={onChange}
                            value={value}
                        />
                        {error && (
                            <div>
                                {error.message}
                            </div>
                        )}
                    </>
                )}
            />
        </View>
    );
}
