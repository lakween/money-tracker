import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '../ui/select';
import { View, StyleSheet, Platform } from 'react-native';
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form';
import { Label } from '../ui/label';
import { number, string } from 'yup';
import { Input } from '../ui/input';
import { useState } from 'react';


type FormSearchableSelectProps = {
    control: Control;
    name: string;
    label?: string;
    rules?: RegisterOptions;
    placeholder?: string;
    options: [{ "label": string, "value": number | string }]
};

const FormSearchableSelect = ({ control, name = "", label = "", rules, placeholder = "", options = [] as any }: FormSearchableSelectProps) => {
    const insets = useSafeAreaInsets();
    const [searchText, setSearchText] = useState('');

    // filter options
    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log(searchText,'filteredOptions')

    const contentInsets = {
        top: insets.top,
        bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
        left: 12,
        right: 12,
    };

    return (
        <View >
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        {label ? (
                            <Label className="text-md mb-1" nativeID={`${name}-label`}>
                                {label}
                            </Label>
                        ) : null}

                        <Select onValueChange={onChange} value={value}>
                            <SelectTrigger asChild>
                                {/* <View className="p-2"> */}
                                    <Input
                                        placeholder="Search..."
                                        value={searchText}
                                        onChange={(text)=>{console.log(text)}}
                                        className="border rounded px-2 py-1"
                                    />
                                {/* </View> */}
                                {/* <SelectValue placeholder={placeholder} /> */}
                            </SelectTrigger>
                            <SelectContent insets={contentInsets} className='!w-[100%]' >
                                <View className="p-2">
                                    <Input
                                        placeholder="Search..."
                                        value={searchText}
                                        onChangeText={setSearchText}
                                        className="border rounded px-2 py-1"
                                    />
                                </View>

                                {filteredOptions.map((item, index) => (
                                    <SelectItem
                                        key={`${index}-item`}
                                        label={item.label}
                                        value={item?.value as any}
                                    >
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {error && (
                            <View className="mt-1">
                                <Label className="text-red-500 text-sm">{error.message}</Label>
                            </View>
                        )}
                    </>
                )}
            />
        </View>

    );
}


export default FormSearchableSelect