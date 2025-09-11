import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { Overlay } from '@rn-primitives/popover';
import { size } from "lodash";
import React, { useEffect, useRef, useState } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { Platform, SafeAreaView, StatusBar, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

type FormSearchableSelectProps = {
    control: Control;
    name: string;
    label?: string;
    rules?: RegisterOptions;
    placeholder?: string;
    options: [{ "label": string, "value": number | string, "desciption": string }]
};


export function PopoverPreview({ control, name = "", label = "", rules, placeholder = "", options = [] as any }: FormSearchableSelectProps) {
    const [searchText, setSearchText] = useState('');

    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(searchText.toLowerCase())
    );

    const insets = useSafeAreaInsets()

    const contentInsets = {
        top: insets.top,
        bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
        left: 12,
        right: 12,
    };

    const triggerRef = React.useRef<any>(null);

    return (

        <View style={{ flex: 1 }}>
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
                        triggerRef.current?.close()
                    }

                    const onInputChange = (text: any) => {
                        setSearchText(text)
                        triggerRef.current?.open()
                    }

                    return (<>
                        {label ? (
                            <Label className="text-md mb-1" nativeID={`${name}-label`}>
                                {label}
                            </Label>
                        ) : null}

                        <Popover >
                            <PopoverTrigger asChild ref={triggerRef}  >
                                <Input autoFocus={true}
                                    onChangeText={onInputChange} value={searchText} />
                            </PopoverTrigger>

                            <PopoverContent
                                side="bottom"
                                style={{ width: '100%', height: 200 }}
                                pointerEvents="box-none"
                                avoidCollisions={false}
                                insets={contentInsets}
                            >
                                <View style={{ maxHeight: 200, overflowY: 'scroll' }}>
                                    <ScrollView
                                        contentContainerStyle={{ paddingVertical: 8 }}
                                        keyboardShouldPersistTaps="always"
                                    >
                                        {filteredOptions.length > 0 ? (
                                            filteredOptions.map((item, index) => (
                                                <View key={index} style={{ marginBottom: 8 }}>
                                                    <Text
                                                        onPress={() => onPressedChange(item)}
                                                        style={{ fontWeight: '500' }}
                                                    >
                                                        {item.label}
                                                    </Text>
                                                    {item?.desciption && (
                                                        <Text style={{ color: '#888', fontSize: 12 }}>
                                                            {item.desciption}
                                                        </Text>
                                                    )}
                                                </View>
                                            ))
                                        ) : (
                                            <Text style={{ fontWeight: '500', color: 'gray', textAlign: 'center' }}>
                                                Not Found
                                            </Text>
                                        )}
                                    </ScrollView>
                                </View>
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
        paddingTop: StatusBar.currentHeight,
        maxHeight: 200
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    text: {
        fontSize: 42,
        padding: 12,
    },
    maxHeight: {
        maxHeight: 20
    }
});