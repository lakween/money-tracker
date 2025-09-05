import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '../ui/select';
import { View } from 'react-native';
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form';
import { Label } from '../ui/label';
import { number, string } from 'yup';


type FormSelectProps = {
    control: Control;
    name: string;
    label?: string;
    rules?: RegisterOptions;
    placeholder?: string;
    options: [{ "label": string, "value": number | string }]
};

const FormSelect = ({ control, name = "", label = "", rules, placeholder = "", options = [] as any }: FormSelectProps) => {
    const insets = useSafeAreaInsets();
    const contentInsets = {
        top: 100,
        bottom: 100,
        left: 100,
        right: 100,
    };

    return (
        <View className="w-100">
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }: any) => (
                    <>
                        <Label className='text-md mb-1' nativeID='name'>{label}</Label>
                        <Select onValueChange={onChange} className='w-100' defaultValue={{ value: 'apple', label: 'Apple' }}>
                            <SelectTrigger className='w-100'>
                                <SelectValue
                                    className="text-foreground text-sm"
                                    placeholder="Select a fruit"
                                />
                            </SelectTrigger>
                            <SelectContent className='w-100'>
                                {
                                    options?.map((item: any, index: number) => {
                                        return (
                                            <View className='w-100' key={`${index}-view`}>
                                                <SelectItem className='w-100' key={`${index}-item`} label={item?.label} value={item?.value}>
                                                    {item.value}
                                                </SelectItem>
                                            </View>
                                        )
                                    })
                                }
                            </SelectContent>
                        </Select>
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


export default FormSelect