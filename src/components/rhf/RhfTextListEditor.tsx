import {useController} from "react-hook-form"

import type {TextListEditorProps} from "../TextListEditor"
import type {ReactElement} from "react"
import type {FieldErrors, UseControllerProps} from "react-hook-form"
import type {Promisable, SetRequired, SetReturnType} from "type-fest"

import TextListEditor from "../TextListEditor"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FieldValues = Record<string, any>
type OnChange = Exclude<TextListEditorProps[`onChange`], undefined>
export type RhfTextListEditorProps<TFieldValues extends FieldValues> = Omit<
	TextListEditorProps,
	`textList` | `ref` | `onChange`
> &
	SetRequired<UseControllerProps<TFieldValues>, `control`> & {
		onChange?: SetReturnType<OnChange, Promisable<ReturnType<OnChange>>> | undefined
	}

const RhfTextListEditor = <TFieldValues extends FieldValues = FieldValues>({
	control,
	name,
	rules,
	shouldUnregister,
	defaultValue,
	onChange,
	...props
}: RhfTextListEditorProps<TFieldValues>): ReactElement | null => {
	const {
		field,
		fieldState: {error},
	} = useController({control, name, rules, shouldUnregister, defaultValue})

	return (
		<TextListEditor
			{...props}
			textList={field.value}
			onChange={(list) => {
				if (typeof list === `function`) field.onChange(list(field.value))
				else field.onChange(list)
				onChange && Promise.resolve(onChange(list)).catch(console.error)
			}}
			onBlur={field.onBlur}
			errors={error as unknown as FieldErrors<Array<{text: string}>>}
			ref={field.ref}
		/>
	)
}

export default RhfTextListEditor
