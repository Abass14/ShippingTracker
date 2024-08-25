import ShallowRenderer from 'react-shallow-renderer';
import AppText from '../../src/app/components/text';

it('should render AppText correctly', () => {
    const renderer = new ShallowRenderer()
    const tree = renderer.render(
        <AppText />
    )
    expect(tree).toMatchSnapshot()
})