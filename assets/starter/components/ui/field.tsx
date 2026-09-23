'use client'

import { Field as BaseField } from '@base-ui/react/field'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格表单原语（基于 Base UI Field，自动串联 label/control/description/error 的
  aria 关系与校验状态）。组合：
    <FormField>
      <FieldLabel>邮箱</FieldLabel>
      <Input ... />                (或任意受 Field 管理的控件)
      <FieldDescription>我们不会公开你的邮箱</FieldDescription>
      <FieldError>请输入有效邮箱</FieldError>
    </FormField>
*/

function FormField({ className, ...props }: React.ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root
      data-slot="field"
      className={cn('flex flex-col gap-1.5', className)}
      {...props}
    />
  )
}

function FieldLabel({ className, ...props }: React.ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label
      data-slot="field-label"
      className={cn('type-body-sm-strong text-ink', className)}
      {...props}
    />
  )
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Description>) {
  return (
    <BaseField.Description
      data-slot="field-description"
      className={cn('type-caption text-mute', className)}
      {...props}
    />
  )
}

function FieldError({ className, ...props }: React.ComponentProps<typeof BaseField.Error>) {
  return (
    <BaseField.Error
      data-slot="field-error"
      className={cn('type-caption text-error', className)}
      {...props}
    />
  )
}

/* 独立 Label（不在 Field 上下文时使用） */
function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      data-slot="label"
      className={cn('type-body-sm-strong text-ink', className)}
      {...props}
    />
  )
}

export { FormField, FieldLabel, FieldDescription, FieldError, Label }
