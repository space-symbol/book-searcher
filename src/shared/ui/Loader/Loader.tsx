import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Loader.module.css';

interface LoaderProps {
    className?: string,
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <span className={classNames(cls.Loader, [ className ], {})}/>
    );
};

