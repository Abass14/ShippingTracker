import ShallowRenderer from 'react-shallow-renderer';
import AppSearchBar from '../../src/app/components/search-bar';

it('should render SearchBar correctly', () => {
    const renderer = new ShallowRenderer()
    const tree = renderer.render(
        <AppSearchBar />
    )
    expect(tree).toMatchSnapshot()
})