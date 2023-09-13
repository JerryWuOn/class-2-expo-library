import { StyleSheet, Text, View } from 'react-native';
import { Stack, Checkbox} from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { TextField, } from '@fluentui/react/lib/TextField';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Stack>
        <DefaultButton text="Standard" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
        <PrimaryButton text="Primary" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
      </Stack>

      <Checkbox label="Unchecked checkbox (uncontrolled)" onChange={_onChange} />
      <Checkbox label="Checked checkbox (uncontrolled)" defaultChecked onChange={_onChange} />
      <Checkbox label="Disabled checkbox" disabled />
      <Checkbox label="Disabled checked checkbox" disabled defaultChecked />
      <Toggle label="Disabled with inline label and without onText and offText" inlineLabel disabled />

      <Toggle
        label="Enabled and checked (ARIA 1.0 compatible)"
        defaultChecked
        onText="On"
        offText="Off"
        onChange={_onChange}
        role="checkbox"
      />
      <SearchBox placeholder="Search" underlined={true} />;
      <TextField label="Standard" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:flex,
    flex: 1,
    flexDirection: column,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
