---
date: 2023-10-01
tags: ['ruby', 'coding']
---

# My First Post

## Table of contents

- [My First Post](#my-first-post)
  - [Table of contents](#table-of-contents)
  - [About](#about)
  - [Story](#story)
  - [Code examples](#code-examples)

## About

This is dummy boilerplate.

## Story

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
sequi laborum exercitationem fugit sunt! Quam minus tenetur earum ipsa et iusto at dolor odit sapiente sequi odio dicta esse
sint molestiae culpa est debitis nisi, animi quidem, sit aliquam optio labore! Totam recusandae ea voluptatem
quas, vel illum deleniti tempora, iste dolor magni ullam laboriosam aut inventore maiores sapiente
dignissimos, possimus maxime a ab! Tenetur dicta maxime nulla illum quo consectetur eaque eius culpa hic,
deserunt fuga sapiente aut sint illo, quod rem quis odio quam quos earum voluptate eveniet a odit? Accusamus
quod obcaecati error praesentium officia eaque sit rem perspiciatis ab harum aspernatur explicabo consequatur
minima, assumenda quos quasi? Fugit odit exercitationem repudiandae labore, deleniti consequatur distinctio
quisquam delectus nesciunt molestias consectetur facere ullam ea iste dolore doloribus adipisci tenetur. Sequi
quisquam repellendus fuga est consequatur autem reiciendis.

## Code examples

Some dummy code example:

```elixir
module Store do
defmodule Types.Shapes do
  @type point :: {number, number}
  @type shape :: :circle | :square | :triangle

  @spec area(shape, number) :: number
  def area(:circle, radius) do
    :math.pi() * radius * radius
  end

  def area(:square, side) do
    side * side
  end

  def area(:triangle, base, height) do
    0.5 * base * height
  end
end
```
