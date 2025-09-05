import { Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import * as React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

export default function FormInput({ control, name, label, placeholder, rules }: any) {
    return (
        <View className="">
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }: any) => (
                    <>
                        <Label className='' nativeID='name'>{label}</Label>
                        <Input
                            placeholder={placeholder}
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
