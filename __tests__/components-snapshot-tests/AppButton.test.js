import AppButton from '../../src/app/components/button'
import { NavigationContainer } from '@react-navigation/native'
import ShallowRenderer from 'react-shallow-renderer';

it('should render AppButton correctly', () => {
    const renderer = new ShallowRenderer()
    const tree = renderer.render(
        <NavigationContainer>
            <AppButton />
        </NavigationContainer>
    )
    expect(tree).toMatchSnapshot()
})