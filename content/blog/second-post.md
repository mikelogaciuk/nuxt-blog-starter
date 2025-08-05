---
date: 2025-02-01
tags: ['elixir', 'fp', 'coding']
---

# My Second Post

## Table of contents

- [My Second Post](#my-second-post)
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

```ruby
defmodule Examples.SalesDocument do
  @callback generate_number() :: String.t()
  @callback calculate_total() :: float()
  @callback print() :: :ok
end
defmodule Examples.Receipt do
  @behaviour Examples.SalesDocument

  @impl true
  def generate_number do
    "R-" <> :crypto.strong_rand_bytes(4) |> Base.encode16()
  end

  @impl true
  def calculate_total do
    # Przykładowa logika obliczania sumy
    100.0
  end

  @impl true
  def print do
    IO.puts("Printing receipt...")
    :ok
  end
end
defmodule Examples.Invoice do
  @behaviour Examples.SalesDocument

  @impl true
  def generate_number do
    "I-" <> :crypto.strong_rand_bytes(4) |> Base.encode16()
  end

  @impl true
  def calculate_total do
    # Przykładowa logika obliczania sumy z podatkiem
    100.0 * 1.23
  end

  @impl true
  def print do
    IO.puts("Printing invoice...")
    :ok
  end
end
```
