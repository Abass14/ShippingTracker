import ShallowRenderer from 'react-shallow-renderer';
import Checkbox from '../../src/app/components/checkbox';

it('should render Checkbox correctly', () => {
    const renderer = new ShallowRenderer()
    const tree = renderer.render(
        <Checkbox isChecked onChecked={() => {}} />
    )
    expect(tree).toMatchSnapshot()
})