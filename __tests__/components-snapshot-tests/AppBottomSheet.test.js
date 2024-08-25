import ShallowRenderer from 'react-shallow-renderer';
import AppBottomSheet from '../../src/app/components/bottomsheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';

it('should render AppBottomSheet correctly', () => {
    const renderer = new ShallowRenderer()
    const tree = renderer.render(
        <SafeAreaProvider>
            <AppBottomSheet />
        </SafeAreaProvider>
    )
    expect(tree).toMatchSnapshot()
})