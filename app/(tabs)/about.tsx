import { Controller, useForm } from 'react-hook-form';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function AboutScreen() {
   const { handleSubmit, control, reset } = useForm<any>({
          defaultValues: {
              MyCheckbox: false,
          },
      })
      
  return (
    <View className=''>
      <Text >About screen</Text>
      <Controller
        control={control}
        name={'ds'}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <TextInput
              className={`
                                border rounded-xl px-4 py-2 text-base text-gray-900 bg-white placeholder:text-gray-500
                                ${error ? 'border-red-500' : 'border-gray-300'}
                                focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                            `}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {error && (
              <Text className="text-red-600 text-xs mt-1">{error.message}</Text>
            )}
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
