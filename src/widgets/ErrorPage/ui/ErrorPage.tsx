import { useNavigate } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page.tsx';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.css';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const navigate = useNavigate();
    const reloadPage = () => {
        location.reload();
    };
  const backToMainPage = () => {
    navigate('/');
    location.reload();
  };

    return (
        <Page className={classNames(cls.ErrorPage, [className])}>
            <h2 className={cls.title}>An error occurred while fetching data</h2>
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={reloadPage}
            >
                Reload page
            </Button>
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={backToMainPage}
            >
              Back to main page
            </Button>
        </Page>
    );
};
