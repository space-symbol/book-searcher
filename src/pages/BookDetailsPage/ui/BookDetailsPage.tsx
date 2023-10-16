import { useParams } from 'react-router-dom';
import { BookDetails } from 'entities/Book';
import { Page } from 'shared/ui/Page/Page.tsx';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './BookDetailsPage.module.css';

interface BookDetailsPageProps {
    className?: string;
}

const BookDetailsPage = ({className}: BookDetailsPageProps) => {
    const { id } = useParams<{id: string}>();
    return (
        <Page className={classNames(cls.BookDetailsPage, [className], {})}>
            {id ? <BookDetails id={id}/>: 'The book was not found'}
        </Page>
    );
};
export default BookDetailsPage;

