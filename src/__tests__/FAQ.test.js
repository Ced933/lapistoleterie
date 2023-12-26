import { render, screen} from '@testing-library/react';
import FAQ from '../components/FAQ/FAQ';


test('should render faq component', ()=>{
    render(<FAQ/>);
    const faqElement = screen.getByTestId('faq');
    expect(faqElement).toBeInTheDocument();
    expect(faqElement).toHaveTextContent('Foire aux questions');
})
