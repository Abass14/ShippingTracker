import ShallowRenderer from 'react-shallow-renderer';
import AppInput from '../../src/app/components/input';

it('should render AppInput correctly', () => {
    const renderer = new ShallowRenderer()
    const tree = renderer.render(
        <AppInput />
    )
    expect(tree).toMatchSnapshot()
})