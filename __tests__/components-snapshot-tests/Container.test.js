import ShallowRenderer from 'react-shallow-renderer';
import Container from '../../src/app/components/container';

it('should render AppContainer correctly', () => {
    const renderer = new ShallowRenderer()
    const tree = renderer.render(
            <Container />
    )
    expect(tree).toMatchSnapshot()
})