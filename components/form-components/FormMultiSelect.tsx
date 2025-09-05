import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { useEffect, useRef, useState } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { View, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SelectItem } from '../ui/select';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Toggle } from '../ui/toggle';
import React from 'react';
import { Close, Overlay } from '@rn-primitives/popover';
import { size } from "lodash";

type FormSearchableSelectProps = {
    control: Control;
    name: string;
    label?: string;
    rules?: RegisterOptions;
    placeholder?: string;
    options: [{ "label": string, "value": number | string }]
};


export function PopoverPreview({ control, name = "", label = "", rules, placeholder = "", options = [] as any }: FormSearchableSelectProps) {
    const [searchText, setSearchText] = useState('');

    // filter options
    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log(filteredOptions, 'filteredOptions')

    const insets = useSafeAreaInsets()

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
                    render={({ field: { onChange, value }, fieldState: { error }, }) => {


                        useEffect(() => {
                            if (value) {
                                setSearchText(value)
                            }
                        }, [])

                        const onPressedChange = (item: any) => {
                            onChange(item.value)
                            setSearchText(item.value)
                        }

                        const onInputChange = (text: any) => {
                            setSearchText(text)
                        }

                        return (<>
                            {label ? (
                                <Label className="text-md mb-1" nativeID={`${name}-label`}>
                                    {label}
                                </Label>
                            ) : null}

                            <Popover >
                                <PopoverTrigger asChild  >
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                                        <Input autoFocus={false} onChangeText={onInputChange} value={searchText} />
                                    </TouchableWithoutFeedback>
                                </PopoverTrigger>
                                <PopoverContent side="bottom" className="w-full" insets={contentInsets}>
                                    <SafeAreaProvider>
                                        <View className="gap-4">
                                            {

                                                size(filteredOptions) > 0 ? filteredOptions?.map((item, index) => (
                                                    <Overlay key={index} asChild forceMount closeOnPress>
                                                        <Text
                                                            onPress={() => onPressedChange(item)}
                                                            key={'label' + index}
                                                            className="font-medium leading-none cursor-pointer hover:bg-blue-300"
                                                        >
                                                            {item.label}
                                                        </Text>
                                                    </Overlay>

                                                )) :
                                                    <Overlay key={'not-foi=und'} asChild forceMount closeOnPress>
                                                        <Text

                                                            className="font-medium leading-none cursor-pointer hover:bg-blue-300"
                                                        >
                                                            Not Found
                                                        </Text>
                                                    </Overlay>
                                            }
                                        </View>
                                    </SafeAreaProvider>
                                </PopoverContent>
                            </Popover>

                            {error && (
                                <View className="mt-1">
                                    <Label className="text-red-500 text-sm">{error.message}</Label>
                                </View>
                            )}
                        </>)
                    }}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});