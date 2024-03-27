import { ComponentProps, ReactNode } from "react";

export interface FloatButtonProps extends ComponentProps<'button'> {
    children: ReactNode
}

export function FloatButton(props: FloatButtonProps) {
    return (
        <button 
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
            {...props}
        />
    );
}