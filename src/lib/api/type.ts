	type Variant = 'primary' | 'outline';
	type Size = 'sm' | 'md' | 'lg';

export type Product = {
		id: string;
		name: string;
		price: number;
		imageUrl: string;
		color: string;
	};

    export	interface Props{
        imageUrl?:string
        price?:string|number
        name?:string
		label?: string;
		variant?: Variant;
		onClick?: (event: MouseEvent) => void;
		size?: Size;
		iconFirst?: string;
		iconLast?: string;
		class?: string;
        children?: () => any;
	}

export type InputValue = string | number | undefined;

     export interface PropsForInput {
    label?: string;
    value?: InputValue ;
	 checked?: boolean;
    placeholder?: string;
    required?: boolean;
    type?: 'text' | 'password' | 'email' | 'number' | 'checkbox';
    className?: string;
  }