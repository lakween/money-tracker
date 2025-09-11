import FormInput from "@/components/form-components/FormInput";
import FormSearchableSelect from "@/components/form-components/FormSearchableSelect";
import FormSelect from "@/components/form-components/FormSelect";
import FormTextArea from "@/components/form-components/FormTextArea";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";
import * as yup from "yup";
import { Text } from '@/components/ui/text';
import { PopoverPreview } from "@/components/form-components/FormMultiSelect";
import { SafeAreaView } from "react-native-safe-area-context";

const FirstSection = () => {
    const { handleSubmit, control, reset, watch } = useForm<any>({
        defaultValues: {
            MyCheckbox: false,
            remarks: 'Incomming'
        },
    })
    const [state, setState] = React.useState(false)

    const data = [
        { value: 'ic', label: 'In Comming' },
        { value: 'og', label: 'Out Going' }
    ]

    return (
        <>
            <View className={"flex w-full gap-5 "}>

                <FormInput control={control} name={"amount"} label={"Amount"} placeholder={"Amount"} />
                <FormSelect control={control} name="type" label="Type" placeholder="Type" options={[
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    }
                ] as any} />

                {/* <FormSearchableSelect control={control} name="tags" label="Tags" placeholder="Type" options={[
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    }
                ] as any} /> */}

                {/* <FormSearchableSelect control={control} name="account" label="Account" placeholder="Account" options={[
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    }
                ] as any} />
                 

                <FormTextArea control={control} name="remarks" label="Remarks" placeholder="Remarks" /> */}
                <PopoverPreview control={control} name="remarks" label="Remarks" options={[
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    },
                    {
                        "label": 'Incomming',
                        "value": "Incomming"
                    },
                    {
                        "label": 'OutGoing',
                        "value": "OutGoing"
                    }
                ] as any} />

            </View>

            {/* <View className=" flex flex-row justify-center gap-3 mt-3">
                <Button variant={'default'} className="px-6" onPress={() => console.log('works', control._formValues)}>
                    <Text>Add</Text>
                </Button>
                <Button variant={'destructive'} onPress={() => console.log('asas')}>
                    <Text>Cancel</Text>
                </Button>
            </View> */}

            {/* <Example/> */}
        </>

    );
}

export default FirstSection


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

const schema = yup
    .object({
        firstName: yup.string().required(),
        age: yup.number().positive().integer().required(),
    })
    .required()