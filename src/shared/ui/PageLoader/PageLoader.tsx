import { Loader } from 'shared/ui/Loader/Loader.tsx';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.css';

interface PageLoaderProps {
    className?: string,
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(cls.Wrapper, [className], {})}>
            <Loader/>
        </div>
    );
};



